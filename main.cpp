#include <iostream>
#include "CosmicObjectList.cpp"

int main() {
    CosmicObjectList list;
    list.populateListFromFile("Data.txt"); // Load data from Data.txt
    list.printAllObjects(); // Print all cosmic objects to verify

    return 0;
}
