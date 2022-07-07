// Task - Mumbling
    // This time no story, no theory. The examples below show you how to write function accum:

    // Examples:
    // accum("abcd") -> "A-Bb-Ccc-Dddd"
    // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    // accum("cwAt") -> "C-Ww-Aaa-Tttt"
    // The parameter of accum is a string which includes only letters from a..z and A..Z.

      // Solution
      function accum(s) {
        return s.split('').map((el, i) => (el.toUpperCase() + el.toLowerCase().repeat(i))).join('-');
      }

      // Tests
      accum("ZpglnRxqenU")
      // 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
      accum("NyffsGeyylB")
      // 'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
      accum("MjtkuBovqrU")
      // 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'
      accum("EvidjUnokmM")
      // 'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
      accum("HbideVbxncC")
      // 'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
    