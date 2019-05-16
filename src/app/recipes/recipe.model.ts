export class Recipe {

  // Naam van het recept
  public name: string;
  // Beschrijving van het recept
  public desciption: string;
  // Url naar de image
  public imagePath: string;


  constructor(name: string, desciption: string, imagePath: string) {
    this.name = name;
    this.desciption = desciption;
    this.imagePath = imagePath;
  }
}
