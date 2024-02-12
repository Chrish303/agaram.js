#include<iostream>
class A{
    int x;
    public:
    virtual void fun()=0;
    int getX() { 
        return x; 
        }
};
class B:public A{
    int y;

    public:
    void fun(){
        std::cout<<"pure virtual function";
    }
};
int main(void){
    B obj;
    obj.fun();
    return 0;
}