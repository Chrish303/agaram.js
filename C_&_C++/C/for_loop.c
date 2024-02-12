#include <stdio.h>
int main() {
    int a=5;
    int arr[5]={11,22,33,44,55};
    printf("Index are");
    for(int i=0;i<sizeof(arr)/sizeof(int);i++){
        printf("%d\n",arr[i]);
    }
}