"use strict";

$(".meter > span").each(function () {
    $(this)
      .data("origWidth", $(this).width())
      .width(0)
      .animate(
        {
          width: $(this).data("origWidth")
        },
        1200
      );
  });

  $(document).ready(function() {
	loadMeters();
});

function loadMeters(){
    let workoutStr = ``;
	for(let workout in workoutChallenges) {
		workoutStr += `
            <section class="workout-container"> 
                <header>${workoutChallenges[workout].title}</header>
                <sub>${workoutChallenges[workout].current}/${workoutChallenges[workout].totalNeeded}</sub>
                <div class="meter ${workoutChallenges[workout].styles}">
                    <span style="width: ${workoutChallenges[workout].progress()}"></span>
                </div>
            </section>
        `
	}

	$('#workout-list-container').html(`       
		${workoutStr}
    `);

}

