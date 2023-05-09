import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: { [key: string]: string } = {};

  constructor(private storage: Storage) {}

  // Cargar imagen:
  public async uploadImage($event: any, name: string): Promise<void> {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/${name}`);
    try {
      await uploadBytes(imgRef, file);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Obtener imagen:
  public async getImageUrl(name: string): Promise<string> {
    if (this.images[name]) {
      // Si la URL ya se cargo previamente, la devuelve directamente:
      return this.images[name];
    }
    // Si la URL aun no se cargo, la obtiene y la guarda para futuras llamadas:
    const imgRef = ref(this.storage, `imagen/${name}`);
    try {
      const url = await getDownloadURL(imgRef);
      this.images[name] = url;
      return url;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}

