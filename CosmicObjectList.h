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
    int getSize() { return cosmicObjects.size(); }
    CosmicObject getRandObj();

    CosmicObject getObjectByName(const std::string& name) const {
        for (const auto& obj : cosmicObjects) {
            if (obj.getName() == name) {
                return obj; // Return the found object
            }
        }
        throw std::runtime_error("Object not found."); // Or handle it however you prefer
    }

};

#endif
