#include <iostream>
#include <string>
#include "src/greeting.h"

int main(){
  std::string myname = "Big Dylan";
  std::string response = helloUser(myname);
  std::cout << response << std::endl;
  return 0;
}
