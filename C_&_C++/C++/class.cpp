#include <iostream>

class Base{
        public:
            Base(){
                std::cout << "This is from constructor";
            };
            int baseVar;
            int baseFun(){
                std::cout << "Function inside public";
            };
            ~Base(){
                std::cout << "Destructor executed";
            };
        private:
            int privateFun(){
                std::cout <<"Function inside private";
            };
        protected:
            int protectFun(){
                std::cout <<"Function inside protected";
            };
    };
    
int main() {
    Base clsname;
    std::cout <<"\n";
    clsname.baseFun();
    clsname.baseVar=1;
    std::cout <<"\n"<<clsname.baseVar<<"\n";
}