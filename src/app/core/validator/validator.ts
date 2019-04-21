import { Validators, ValidatorFn, AbstractControl } from '@angular/forms';

export class Validator {

  static id(): ValidatorFn {
    return Validators.pattern(this.idPattern());
  }

  static email(): ValidatorFn {
    return Validators.pattern(this.emailPattern());
  }

  static phone(): ValidatorFn {
    return Validators.pattern(this.phonePattern());
  }

  static password(): ValidatorFn {
    // return Validators.pattern(this.passwordPattern())
    return (c: AbstractControl) => {
      const password = (c.value || '').replace(/[\\]/g, '\\');
      const validPassword1 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$`~@!%*#?&^'":;(){}<>,.\-_+=/\[\]|\\])[A-Za-z\d$`~@!%*#?&^'":;(){}<>,.\-_+=/\[\]|\\]/; // /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;​
      const validPassword2 = /[ㄱ-ㅎ가-힣ㅏ-ㅣ]/g;

      if(validPassword1.test(password) === false) {
        return { 'notEqualPassword': { valid: false } };
      }
      if(validPassword2.test(password) === true) {
        return { 'koreanInPassword': { valid: false } };
      }
      if(password.includes(' ') === true) {
        return { 'spaceInPassword': { valid: false } };
      }
    };
  }

  /**
   * 핸드폰 번호 vaildator!
   */
  static mobile(): ValidatorFn {
    return Validators.pattern(this.mobilePattern());
  }

  /**
   * only num validator!
   */
  static num(): ValidatorFn {
    return Validators.pattern(this.numPattern());
  }

  /**
   * only 영어 validator!
   */
  static eng(): ValidatorFn {
    return Validators.pattern(this.engPattern());
  }

  static engSpace(): ValidatorFn {
    return Validators.pattern(this.engSpacePattern());
  }

  /**
   * only 한글 validator!
   */
  static kor(): ValidatorFn {
    return Validators.pattern(this.korPattern());
  }

  /**
   * 생년월일 validator!
   */
  static birthday(): ValidatorFn {
    return Validators.pattern(this.datePattern());
  }

  /**
   * 생년월일 validator!
   */
  static birthdayWithSeparator(): ValidatorFn {
    return Validators.pattern(this.dateWithSeparatorPattern());
  }

  /**
   * 월 validator!
   * */
  static month(): ValidatorFn {
    return Validators.pattern(this.monthPattern());
  }

  /**
   * 날짜 validator!
   */
  static date(): ValidatorFn {
    return Validators.pattern(this.datePattern());
  }

  /*
   * 여권번호 Vaildators
   * */
  static passport(): ValidatorFn {
    return Validators.pattern(this.passportNumberPattern());
  }

  static cardNo(): ValidatorFn {
    return Validators.pattern(this.cardNoPattern());
  }

  static cardPeriodMonth(): ValidatorFn {
    return Validators.pattern(this.cardPeriodMonthPattern());
  }

  static cardPeriodYear(): ValidatorFn {
    return Validators.pattern(this.cardPeriodYearPattern());
  }

  /**
   * 주민등록 번호 앞 7자리
   */
  static regNo(): ValidatorFn {
    return Validators.pattern(this.regNoPattern());
  }

  /**
   * 사업자번호 10자리
   */
  static bizNo(): ValidatorFn {
    return Validators.pattern(this.bizNoPattern());
  }

  static excludedSpecialWord(): ValidatorFn {
    return Validators.pattern(this.excludedSpecialPattern());
  }

  static excludedKor(): ValidatorFn {
    return Validators.pattern(this.excludedKorPattern());
  }

  static membershipCard(): ValidatorFn {
    return Validators.pattern(this.membershipCardPattern());
  }

  static cardPeriodMonthPattern(): string {
    return '^([0][1-9])|([1][0-2])$';
  }

  static cardPeriodYearPattern(): string {
    return '^([1-2][0-9])$';
  }

  static cardNoPattern(): string {
    return '^[3,4,5,9][0-9]{15}$';
    // return '(5[1-5]\d{14})|(4\d{12})(\d{3}?)|3[47]\d{13}|(6011\d{12})';
  }

  static bizNoPattern(): string {
    return '^([0-9]{10})$';
  }

  static regNoPattern(): string {
    return '^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))[1-6]$';
  }

  static idPattern(): string {
    return '[A-Za-z0-9\-_@.]*';
  }

  // 이멜 pattern
  static emailPattern(): string {
    // return  '(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)';
    return '[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[-_\\.0-9a-zA-Z]*\\.[a-zA-Z]{2,3}';
  }

  // 일반 전화 pattern
  static phonePattern(): string {
    return '((0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4]|70))-([0-9]{3,4})-([0-9]{4}))|((0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4]|70))([0-9]{7,8}))';
  }

  // 핸드폰 번호 pattern
  static mobilePattern(): string {
    // return '^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$';
    // return '^(?:(010-\d{4})|(01[1|6|7|8|9]-\d{3,4}))-(\d{4})$';
    // return '01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$';
    // return '[0-9]{10,16}'
    // return '(010[0-9]{8})|(01[1|6|7|8|9][0-9]{7,8})';
    return '((?:(010-[0-9]{4})|(01[1|6|7|8|9]-[0-9]{3,4}))-([0-9]{4}))$|((010[0-9]{8})|(01[1|6|7|8|9][0-9]{7,8}))';
  }

  static numPattern(): string {
    return '^[0-9]+$';
  }

  // 영어 패턴
  static engPattern(): string {
    return '^[A-Za-z]*$';
  }

  static engSpacePattern(): string {
    return '^[A-Za-z\\s]*$';
  }

  // 날짜 패턴
  static datePattern(): string {
    // return '^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$';
    return '((19|20)[0-9]{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[0-1]))' + '|' +
        '((19|20)[0-9]{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1]))';
  }

  // 날짜 패턴
  static dateWithSeparatorPattern(): string {
    // return '^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$';
    return '((19|20)[0-9]{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1]))';
  }

  static monthPattern(): string {
    return '(0[1-9]|1[012])';
  }

  // 여권 번호 패턴
  // 이거 이제 안씀
  // (한글만 입력 안되게 하라고 요청 들어옴)
  static passportNumberPattern(): string {
    // return '^[a-zA-Z0-9]+$'
    return '[A-Z]{1}[0-9A-Z]{1}[0-9]{7}';
  }

  static excludedSpecialPattern(): string {
    return '^[a-zA-Z0-9\\s]+$';
  }

  static excludedKorPattern(): string {
    return '^[^가-힣ㄱ-ㅎㅏ-ㅣ]+$';
  }

  static korPattern() {
    return '^[가-힣ㄱ-ㅎㅏ-ㅣ]+$';​
  }

  // 멤버쉽 번호 패턴
  // 이거 이제 안씀
  // (한글만 입력 안되게 하라고 요청 들어옴)
  static membershipCardPattern() {
    return '^[a-zA-Z0-9]+$';
  }

  static objDeepCheck(obj: any, fields: any[] = [], defaultObj: any=false) {
    let returnObj = null;
    for (const field of fields) {
      if (obj[field]) {
        fields.shift();
        this.objDeepCheck(obj[field], fields, defaultObj);
      } else {
        returnObj = defaultObj;
      }
    }

    return returnObj;
  }
}
