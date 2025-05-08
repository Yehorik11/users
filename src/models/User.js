export class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.phone = data.phone;
    this.website = data.website;

    this.address = {
      street: data.address?.street || '',
      suite: data.address?.suite || '',
      city: data.address?.city || '',
      zipcode: data.address?.zipcode || '',
      geo: {
        lat: data.address?.geo?.lat || '',
        lng: data.address?.geo?.lng || '',
      },
    };

    this.company = {
      name: data.company?.name || '',
      catchPhrase: data.company?.catchPhrase || '',
      bs: data.company?.bs || '',
    };
  }

  matches(query) {
    const q = query.toLowerCase();
    return (
      this.name.toLowerCase().includes(q) ||
      this.username.toLowerCase().includes(q) ||
      this.email.toLowerCase().includes(q) ||
      this.phone.toLowerCase().includes(q) ||
      this.website.toLowerCase().includes(q) ||
      this.address.city.toLowerCase().includes(q) ||
      this.company.name.toLowerCase().includes(q)
    );
  }
}
