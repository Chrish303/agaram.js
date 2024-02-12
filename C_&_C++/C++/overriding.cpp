#include <iostream>

class A
{
    public:
        virtual int fun(){
            std::cout << "This is A class";
        };
};

class B:public A
{
    public:
        virtual int fun(){
            std::cout << "This is B class";
        };
};

int main(){
    A *ptr=new A();    ////////////
    ptr->fun();        ////////////
    B *ptr1=new B();   ////////////
    ptr1->fun();       ////////////
};