#include <stdio.h>
#include <stdlib.h>
int main() {
    int n=5;
    int *a=(int*)malloc(n*sizeof(int));
    a[1]=101010;
    printf("%d",a[1]);
}


// int main() {
//     int *b=(int*)malloc(2*sizeof(int));
//     b[0]=1;
//     b[1]=2;
//     b[2]=3;
//     printf("%d",b[2]);
// }