#include <iostream>

class Base{
        public:
            Base(){
                std::cout <<"\n"<< "This is from constructor";
            };
            int baseVar;
            int baseFun(){
                std::cout <<"\n"<< "Function inside public";
                privateFun();
            };
            ~Base(){
                std::cout <<"\n"<< "Destructor executed";
            }
        private:
            int privateFun(){
                std::cout <<"\n"<<"Function inside private";
            };
        protected:
            int protectFun(){
                std::cout <<"\n"<<"Function inside protected";
            };
    };
    
class Base2:public Base{
    public:
       void inheritFun(){
           std::cout <<"\n"<< "inheritance public executed";
           protectFun();
       };
       
};

int main() {
    Base clsname;
    Base2 inhername;
    inhername.baseFun();
    // inhername.inheritFun();
    
}