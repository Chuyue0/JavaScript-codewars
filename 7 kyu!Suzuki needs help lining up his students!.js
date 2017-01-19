/* javascript kata descript
* Subject:Suzuki needs help lining up his students!
* Desc:He decided to schedule the interviews based on the length of the students name in descending order. 
*      You will be given a string of student names. Sort them and return a list of names in descending order.
* Here is an example input:
* string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi';
* Here is an example return from your function:
* lst = ['Takehiko',
      'Takayuki',
      'Takahiro',
      'Takeshi',
      'Takeshi',
      'Takashi',
      'Tadashi',
      'Takeo',
      'Takao'];
* Names of equal length will be returned in reverse alphabetical order (Z->A) such that:
* string = "xxa xxb xxc xxd xa xb xc xd";
* Returns
* ['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa'];
*/
function lineupStudents(students){
  //your code here
  var stu=students.split(" ");
  stu.sort(function(a,b){
    if(a.length==b.length){
      return b.localeCompare(a);
    }else{
      return b.length-a.length;
    }
  });
  return stu.filter(x=>x!='');
}
// Example Tests:
Test.describe("Basic tests",_=>{
s1 = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi';
lst1 = ['Takehiko','Takayuki','Takahiro','Takeshi','Takeshi','Takashi','Tadashi','Takeo','Takao'];
Test.assertSimilar(lineupStudents(s1), (lst1));
s2 = 'Michio Miki Mikio Minori Minoru Mitsuo Mitsuru Nao Naoki Naoko Noboru Nobu Nobuo Nobuyuki Nori Norio Osamu Rafu Raiden Ringo Rokuro Ronin Ryo Ryoichi Ryota Ryozo Ryuichi Ryuu Saburo Sadao Samuru Satoru Satoshi Seiichi Seiji Senichi Shichiro Shig Shigekazu Shigeo Shigeru Shima Shin Shinichi Shinji Shiro Shoichi Shoji Shuichi Shuji Shunichi Susumu Tadao Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi Takumi Tama Tamotsu Taro Tatsuo Tatsuya Teruo Tetsip Tetsuya Tomi Tomio Toru Toshi Toshiaki Toshihiro Toshio Toshiyuki Toyo Tsuneo Tsutomu Tsuyoshi Uyeda Yasahiro Yasuhiro Yasuo Yasushi Yemon Yogi Yoichi Yori Yoshi Yoshiaki Yoshihiro Yoshikazu Yoshimitsu Yoshinori Yoshio Yoshiro Yoshito Yoshiyuki Yuichi Yuji Yuki';
lst2 = ['Yoshimitsu', 'Yoshiyuki', 'Yoshinori', 'Yoshikazu', 'Yoshihiro', 'Toshiyuki', 'Toshihiro', 'Shigekazu', 'Yoshiaki', 'Yasuhiro', 'Yasahiro', 'Tsuyoshi', 'Toshiaki', 'Takehiko', 'Takayuki', 'Takahiro', 'Shunichi', 'Shinichi', 'Shichiro', 'Nobuyuki', 'Yoshito', 'Yoshiro', 'Yasushi', 'Tsutomu', 'Tetsuya', 'Tatsuya', 'Tamotsu', 'Takeshi', 'Takeshi', 'Takashi', 'Tadashi', 'Shuichi', 'Shoichi', 'Shigeru', 'Senichi', 'Seiichi', 'Satoshi', 'Ryuichi', 'Ryoichi', 'Mitsuru', 'Yuichi', 'Yoshio', 'Yoichi', 'Tsuneo', 'Toshio', 'Tetsip', 'Tatsuo', 'Takumi', 'Susumu', 'Shinji', 'Shigeo', 'Satoru', 'Samuru', 'Saburo', 'Rokuro', 'Raiden', 'Noboru', 'Mitsuo', 'Minoru', 'Minori', 'Michio', 'Yoshi', 'Yemon', 'Yasuo', 'Uyeda', 'Toshi', 'Tomio', 'Teruo', 'Takeo', 'Takao', 'Tadao', 'Shuji', 'Shoji', 'Shiro', 'Shima', 'Seiji', 'Sadao', 'Ryozo', 'Ryota', 'Ronin', 'Ringo', 'Osamu', 'Norio', 'Nobuo', 'Naoko', 'Naoki', 'Mikio', 'Yuki', 'Yuji', 'Yori', 'Yogi', 'Toyo', 'Toru', 'Tomi', 'Taro', 'Tama', 'Shin', 'Shig', 'Ryuu', 'Rafu', 'Nori', 'Nobu', 'Miki', 'Ryo', 'Nao']
Test.assertSimilar(lineupStudents(s2), (lst2));
})
