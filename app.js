const schedule = ["Wake up", "eat", "gym", "school work", "job", "scroll YouTube"];

console.log("When I wake up I", schedule[1]);

console.log("I love the", schedule[2])

schedule.push("sleep")

console.log("My normal schedule looks like this:", schedule)

console.log("\t")


const user = {

    name: "Dylan Cantu",
    age: 20,
    student: true,
    class: "IMED",
    items: ["Laptop", "VSCode", "GitHub", "Canvas", "Good Attitude"],

    sayName: function() {

        console.log("My name is", this.name);

        console.log("I am a student:", this.student)

        console.log("I am", this.age, "and I am currently enrroled in",
            this.class)

        console.log("\t")

        console.log("To exel in this class, I must attend with this list :", this.items)



    }
};

user.sayName();