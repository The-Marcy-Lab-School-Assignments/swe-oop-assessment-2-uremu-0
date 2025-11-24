class Phone {
    batteryLevel = 100;
    constructor(brand, model, password)
    this.brand = brand
this.model = model
this.password = password


makeCall(number) {
    this.baterryLevel -= 5
    return `Calling ${number}`
}

charge() {
    this.batteryLevel = 100
    return `Phone fully charged`
}

unlock(password){
    if (password === this.password) {
        return true
    } else {
        return false
    }

}



}

class iPhone extends Phone {
    batteryLevel = 100
    constructor(model, password, numberOfCameras) {
        super('Apple', model, password)
        this.numberOfCameras = numberOfCameras


        makeCall(number) {
            this.baterryLevel -= 5
            return `Calling ${number} using Factime audio`
        }
    }

    faceTime(name) {
        this.batteryLevel -= 10
        return `Facetiming ${name}`
    }



}

// TEST YOUR CODE HERE

const smartPhone = new iPhone("iPhone 14 Pro", "TimeToLearn882", 3);

console.log(smartPhone); // iPhone { brand: "Apple", model: "iPhone 14 Pro", numberOfCameras: 3, batteryLevel: 100}

// 1. Making a call 
console.log(smartPhone.makeCall("555-1234")); // Calling 555-1234 using FaceTime audio
console.log(smartPhone.batteryLevel); // Should be 95

// 2. Using the faceTime method
console.log(smartPhone.faceTime("Alice")); // Facetiming Alice
console.log(smartPhone.batteryLevel); // Should be 85

// 3. Charge the phone
console.log(smartPhone.charge()); // Phone fully charged
console.log(smartPhone.batteryLevel); // Should be 100

// 4. Unlock the phone
console.log(smartPhone.unlock("0000")); // Invalid password
console.log(smartPhone.unlock("TimeToLearn882")); // true

// DO NOT REMOVE
module.exports = { Phone, iPhone };
