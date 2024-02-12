#include<iostream>
class A{
    public:
    int x =10;
};
class B:virtual public A{
    public:
    int i=20;
};
class C:virtual public B{
    public:
    int i=30;
};
class D:virtual public B,public C{
    public:
    int i=40;
};
int main(){
    C obj;
    std::cout<<obj.i<<std::endl;
    return 0;  
}