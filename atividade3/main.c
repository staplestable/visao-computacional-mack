#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE (16 * 1024 * 1024)

typedef struct _PngSignature
{
  unsigned char signature[8];
} PNGSIGNATURE;

typedef struct _PngChunk
{
    unsigned char dataLength[4];
    unsigned char dataType[4];
    char *data;
    unsigned char crc[4];
} PNGCHUNK;


typedef struct _PngStruct
{
    PNGSIGNATURE signature;
    PNGCHUNK* chunks; 
} PNGSTRUCT;


void validate(int val, const unsigned char *msg)
{
    if(!val) {
        // fprintf(stderr, "Invalid file: %s\n", msg);
        exit(1);
    }
}

void check_header(const unsigned char *buffer)
{
    validate((unsigned char)buffer[0] == 0x89, "header byte 1");
    validate((unsigned char)buffer[1] == 'P',  "header byte 2");
}


int read_file(int argc, char **argv, unsigned char *buffer){
    if(argc != 2){
        // printf("Usage: %s <png file>\n", argv[0]);
        return 1;
    }
    if(!buffer){
        // fprintf(stderr, "Couldn't allocate memory!\n");
        return 1;
    }
    FILE *image = fopen(argv[1], "rb");
    if(!image){
        perror("fopen");
        free(buffer);
        return 1;
    }

    int size = fread(buffer, 1, MAX_SIZE, image);
    fclose(image);

    return size;
}

void write_file(unsigned char *buffer, int size){
    FILE *file = fopen("image.txt", "wb");
    int pos = 0;
    fprintf(file, "%s\n", "Signature: ");
    for (pos  = 0; pos < 8; pos++){
        fprintf(file, "%02X ", buffer[pos]);
    }
    fprintf(file, "\n%s\n", "Chunks em hexadecimal: ");
    for (pos; pos < size; pos++){
        fprintf(file, "%02X ", buffer[pos]);
    }
    // fwrite(buffer, sizeof(char), size, file);
    fclose(file);
}
int main(int argc, char **argv){

    unsigned char *buffer  = (unsigned char*) malloc(MAX_SIZE);
    int size = read_file(argc, argv, buffer);


    check_header(buffer);

    //printf("Size: %d", size);
    // printf("Buffer: %s", buffer);

    write_file(buffer, size);

    free(buffer);
    return 0;
}


