#include<iostream>

class A{
    int a;
    int b;
    int*p;
public:
    A()
    {
        p=new int;
    }
    void setdata(int x,int y,int z)
    {
        a=x;
        b=y;
        *p=z;
    }
    void showdata(){
        std::cout<<"Value is :"<<a<<std::endl;
        std::cout<<"Value is :"<<b<<std::endl;
        std::cout<<"Value is :"<<*p<<std::endl;
    }
};
int main(){
    A a1;
    a1.setdata(10,20,30);
    A a2=a1;
    a2.showdata();
}
