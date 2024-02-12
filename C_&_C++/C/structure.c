#include <stdio.h>

int main() {
    struct str{
        int a;
        int b;
        char c[5];
        int d;
    };
    struct str z={0,1,{'a','a','b','v','f'},0};
    printf("%d\n",z.b);
}