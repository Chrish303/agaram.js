#include <stdio.h>

void myfunction(int *a){
    *a=5;
    printf("\n%d",*a);
}

int main() {
    int a;
    a=10;
    printf("\n%d",a);
    myfunction(&a);
}