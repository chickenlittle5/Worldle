PLANETS_INFO = [
    # [Name, Radius (km), Mass (kg), Temp (°C), Year Discovered, Distance from Earth (km)]
    ["Sun",     696340,  1.989e30,  5505,  0, 1.496e8],
    ["Mercury", 2439.7,  3.301e23,  167,   0, 7.7e7],
    ["Venus",   6051.8,  4.867e24,  464,   0, 3.8e7],
    ["Earth",   6371,    5.972e24,  15,    0, 0],
    ["Mars",    3389.5,  6.417e23,  -65,   0, 2.25e8],
    ["Jupiter", 69911,   1.898e27,  -110,  1610,          5.88e8],
    ["Saturn",  58232,   5.683e26,  -140,  1610,          1.195e9],
    ["Uranus",  25362,   8.681e25,  -195,  1781,          2.871e9],
    ["Neptune", 24622,   1.024e26,  -200,  1846,          4.495e9]
]

def get_all_planets_info():
    return PLANETS_INFO

def find_planet_info(selected_text):
    for planet in PLANETS_INFO:
        if planet[0].lower() == selected_text.lower():
            return planet
    return None

def main():
    selected_text = input().strip()
    
    planet_info = find_planet_info(selected_text)
    
    if planet_info:
        print(f"\nInformation for {planet_info[0]}:")
        print(f"Radius: {planet_info[1]} km")
        print(f"Mass: {planet_info[2]:.2e} kg")
        print(f"Surface Temperature: {planet_info[3]} °C")
        print(f"Year Discovered: {planet_info[4]}")
        print(f"Distance from Earth: {planet_info[5]:.2e} km")
    else:
        print(f"No information found for '{selected_text}'")

if __name__ == "__main__":
    main() 