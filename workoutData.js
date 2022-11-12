let workoutChallenges = [
    {
        title: "Journey to Mordor",
        description: "",
        type: "walk",
        calculation: "Miles",
        progress: function(){
            if(this.current()/this.totalNeeded * 100 < 100){
                return `${this.current()/this.totalNeeded * 100}%`
            } else{
                return `100%`;
            }
        },
        styles: "blue",
        milestoneMessage: function() {
            return generateMilestoneMessage(this);
        },
        current: function() {
            return calculateCompleted(this);
        },
        totalNeeded: 1779,
        milestones: [
            { milestoneName: "Bree", milestoneValue: 120 },
            { milestoneName: "Rivendell", milestoneValue: 458 },
            { milestoneName: "Lothlórien", milestoneValue: 920 },
            { milestoneName: "Falls of Rauros", milestoneValue: 1309 },
            { milestoneName: "Mount Doom", milestoneValue: 1779 },
        ]
    },

    {
        title: "Climbing the Burj Khalifa",
        description: "",
        type: "pull",
        calculation: "Pull-ups",
        progress: function(){
            if(this.current()/this.totalNeeded * 100 < 100){
                return `${this.current()/this.totalNeeded * 100}%`
            } else{
                return `100%`;
            }
        },
        styles: "orange",
        milestoneMessage: function() {
            return generateMilestoneMessage(this);
        },
        current: function() {
            return calculateCompleted(this);
        },
        totalNeeded: 2717,
        milestones: [
            { milestoneName: "Leaning Tower of Pisa", milestoneValue: 186 },
            { milestoneName: "Statue of Liberty", milestoneValue: 305 },
            { milestoneName: "Great Pyramid of Giza", milestoneValue: 481 },
            { milestoneName: "30 Rockefeller Center", milestoneValue: 850 },
            { milestoneName: "Eiffel Tower", milestoneValue: 1063 },
            { milestoneName: "Empire State Building", milestoneValue: 1250 },
            { milestoneName: "Central Park Tower", milestoneValue: 1550 },
            { milestoneName: "One World Trade Center", milestoneValue: 1776 },
            { milestoneName: "Shanghai Tower", milestoneValue: 2073 },
            { milestoneName: "Merdeka 118", milestoneValue: 2227 },
            { milestoneName: "Burj Khalifa", milestoneValue: 2717 }
        ]
    },

    {
        title: "Sisyphus' Boulder Push",
        description: "",
        type: "push",
        calculation: "Push-ups",
        progress: function(){
            if(this.current()/this.totalNeeded * 100 < 100){
                return `${this.current()/this.totalNeeded * 100}%`
            } else{
                return `100%`;
            }
        },
        styles: "",
        milestoneMessage: function() {
            return generateMilestoneMessage(this);
        },
        current: function() {
            return calculateCompleted(this);
        },
        totalNeeded: 46001,
        milestones: [
            { milestoneName: "Most People Performing Push-Ups", milestoneValue: 1645 },
            { milestoneName: "Most Push-Ups in an Hour", milestoneValue: 3182 },
            { milestoneName: "Most Knuckle Push-Ups in 24 Hours (Female)", milestoneValue: 9241 },
            { milestoneName: "Most Push-Ups Non-Stop", milestoneValue: 10507 },
            { milestoneName: "Most Push-Ups in 8 Hours", milestoneValue: 14444 },
            { milestoneName: "Most Push-Ups in 12 Hours", milestoneValue: 20085 },
            { milestoneName: "Most Push-Ups in a Day", milestoneValue: 46001 }
        ]
    },

    {
        title: "Rocky's Boxing Bouts",
        description: "",
        type: "fight",
        calculation: "Fights",
        progress: function(){
            if(this.current()/this.totalNeeded * 100 < 100){
                return `${this.current()/this.totalNeeded * 100}%`
            } else{
                return `100%`;
            }
        },
        styles: "red",
        milestoneMessage: function() {
            return generateMilestoneMessage(this);
        },
        current: function() {
            return calculateCompleted(this);
        },
        totalNeeded: 81,
        milestones: [
            { milestoneName: "Bantamweight", milestoneValue: 10 },
            { milestoneName: "Featherweight", milestoneValue: 20 },
            { milestoneName: "Lightweight", milestoneValue: 35 },
            { milestoneName: "Welterweight", milestoneValue: 50 },
            { milestoneName: "Heavyweight", milestoneValue: 64 },
            { milestoneName: "Apollo Creed", milestoneValue: 65 },
            { milestoneName: "Apollo Creed II", milestoneValue: 66 },
            { milestoneName: "Rocky III Beginning", milestoneValue: 76 },
            { milestoneName: "Clubber I", milestoneValue: 77 },
            { milestoneName: "Clubber II", milestoneValue: 78 },
            { milestoneName: "Thunderlips", milestoneValue: 79 },
            { milestoneName: "Drago", milestoneValue: 80 },
            { milestoneName: "Mason Dixon", milestoneValue: 81 }
        ]
    },
];

