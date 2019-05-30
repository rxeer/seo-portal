export class ContactUsDto {

  constructor(data) {
    if (data) {
      this.name = data.name;
      this.email = data.email;
      this.message = data.message;
    }
  }

}
