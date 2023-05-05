import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { decode, encode } from 'js-base64';
import moment from 'moment'

@Injectable({
  providedIn: 'root'
})

export class CookieStorageService {

  public static getCookie(key: string) {
    let cookieName = key + '=',
        cookies = decodeURIComponent(document.cookie).split('; '),
        selectedCookie = ''

    cookies.forEach(key => {
      if(key.indexOf(cookieName) === 0) {
        selectedCookie = decode(key.substring(cookieName.length, key.length))
      }
    })
    return selectedCookie
  }

  constructor(
    private cookieService: CookieService
  ) {}

  setCookie = (key: string, value: string, expiryTime?: number): void  => {
    this.cookieService.set(key, encode(value), {
      expires: moment().add(expiryTime || 604800, 'seconds').toDate(),
      path: '/',
      secure: true,
      sameSite: 'Strict'
    })
  }

  getDecodedCookie = (key: string): string  => {
    return decode(this.cookieService.get(key))
  }

  getCookie = (key: string): string => {
    return this.cookieService.get(key)
  }

  checkCookies = (...keys: string[]): boolean => {
    for(let key of keys) {
      if(!this.cookieService.check(key)) return false
    }
    return true
  }

  clearAllCookies = (): void => {
    Object.keys(this.cookieService.getAll()).forEach(key => this.cookieService.delete(key, '/'))
  }
}
