let workoutChallenges = [
    {
        title: "Journey to Mordor",
        description: "",
        type: "walking/running",
        calculation: "miles",
        progress: function(){
            if(this.current/this.totalNeeded * 100 < 100){
                return `${this.current/this.totalNeeded * 100}%`
            } else{
                return `100%`;
            }
        },
        styles: "red",
        milestoneMessage: "Miles until",
        current: 1000,
        totalNeeded: 1779
    },

    {
        title: "Climbing the Burj Khalifa",
        description: "",
        type: "walking/running",
        calculation: "miles",
        progress: function(){
            if(this.current/this.totalNeeded * 100 < 100){
                return `${this.current/this.totalNeeded * 100}%`
            } else{
                return `100%`;
            }
        },
        styles: "orange",
        milestoneMessage: "Pull-ups until",
        current: 19000,
        totalNeeded: 2717
    },

    {
        title: "Sisyphus' Boulder Push",
        description: "",
        type: "walking/running",
        calculation: "miles",
        progress: function(){
            if(this.current/this.totalNeeded * 100 < 100){
                return `${this.current/this.totalNeeded * 100}%`
            } else{
                return `100%`;
            }
        },
        styles: "",
        milestoneMessage: "Push-ups until",
        current: 10000,
        totalNeeded: 46001
    },

    {
        title: "Rocky's Boxing Bouts",
        description: "",
        type: "walking/running",
        calculation: "miles",
        progress: function(){
            if(this.current/this.totalNeeded * 100 < 100){
                return `${this.current/this.totalNeeded * 100}%`
            } else{
                return `100%`;
            }
        },
        styles: "red",
        milestoneMessage: "Fights until",
        current: 14,
        totalNeeded: 81
    },
];