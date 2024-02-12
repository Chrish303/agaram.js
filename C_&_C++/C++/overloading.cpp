#include <iostream>
#include <string>

class A{
    public:
        void fun(std::string a,int b){
            std::cout <<a << '\n'<<b;
        };
        int fun(int a,int b){
            std::cout <<"This is overloading";
        };
};

int main (){
    A class1;
    class1.fun(1,2);
    class1.fun("hi",1);
};