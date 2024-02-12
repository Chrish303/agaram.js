#include<iostream>>
using namespace std;
namespace A{
    void fun()
    {
        std::cout<<'first'<< endl;
    };
};
namespace B{
    void fun()
    {
        std::cout<< 'second' << endl;
    };
};
using namespace A::B;
int main(){
    fun();
    return 0;
}
