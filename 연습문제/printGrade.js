function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
  // 여기에 코드를 작성하세요
  if(totalScore > 89){
    console.log('A')
  } else if(totalScore > 79){
    console.log('B')
  } else if(totalScore > 69){
    console.log('C')
  } else if(totalScore > 59){
    console.log('D')
  } else{console.log('F')
    }
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);