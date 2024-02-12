#include <iostream>
using namespace std;
class A {
public:
	static int i;
};
class B{
    public:
    static int j;
};
int A::i = 7;
int B::j = 9;
int main()
{
    A obj;
    B obj1;
    cout << obj.i<<std::endl;
    cout << obj1.j;
}
