// Task - Disemvowel Trolls
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: We will consider a, e, i, o, u as vowels (but not y).

  // Solution
  function disemvowel(str) {
    return str.split('').filter(l => !"aeiouAEIOU".includes(l)).join('')
  }

  // Tests
  disemvowel("This website is for losers LOL!") // "Ths wbst s fr lsrs LL!"
  disemvowel("No offense but,\nYour writing is among the worst I've ever read") // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
  disemvowel("What are you, a communist?") // "Wht r y,  cmmnst?"