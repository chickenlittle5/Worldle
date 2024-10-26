#ifndef COSMIC_OBJECT_LIST_H
#define COSMIC_OBJECT_LIST_H

#include <vector>
#include "CosmicObject.h"

class CosmicObjectList {
private:
    std::vector<CosmicObject> cosmicObjects;

public:
    void populateListFromFile(const std::string &filename);
    void printAllObjects() const;
};

#endif
