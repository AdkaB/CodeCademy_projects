//sleep calculator

const getSleepHours = day => {
    switch (day) {
      case 'Monday':
      return 8;
      case 'Tuesday':
      return 4;
      case 'Wednesday':
      return 6;
      case 'Thursday':
      return 9;
      case 'Friday':
      return 6;
      case 'Saturday':
      return 7;
      case 'Sunday':
      return 8;
      default:
        return 'Error.'
    }
  }
  
  const getActualSleepHours = () => {
    const sum = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
    return sum;
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDept = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.')
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed.')
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. You should get some rest.')
    } else {
      console.log('Error.')
    }
    }
  
  calculateSleepDept()