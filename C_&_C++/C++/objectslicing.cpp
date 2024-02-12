
#include <iostream>
class Base 
{
protected:
	int i;

public:
	Base(int a) 
	{
		 i = a;
	}
	virtual void
	display() 
	{
		std::cout << "I am Base class object, i = " << i ;
	}
};


// Derived class
class Derived : public Base {
	int j;

public:
	Derived(int a, int b): Base(a)
	{

		j = b;
	}
	virtual void display()
	{
		std::cout << "I am Derived class object, i = " << i<< ", j = ";
	}
};

void somefunc(Base obj) 
	{ 
	obj.display(); 
	}

int main()
{
	Base b(33);
	Derived d(45, 54);
	somefunc(b);
	somefunc(d);
	return 0;
}
