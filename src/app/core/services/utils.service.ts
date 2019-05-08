import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

    constructor() {
    }

    public filterArrayByString(array, searchText) {
        if (searchText === '') {
            return array;
        }

        searchText = searchText.toLowerCase();

        return array.filter(itemObj => {
            return this.searchInObj(itemObj, searchText);
        });
    }

    public searchInObj(itemObj, searchText) {
        for (const prop in itemObj) {
            if (!itemObj.hasOwnProperty(prop)) {
                continue;
            }

            const value = itemObj[prop];

            if (typeof value === 'string') {
                if (this.searchInString(value, searchText)) {
                    return true;
                }
            }

            else if (Array.isArray(value)) {
                if (this.searchInArray(value, searchText)) {
                    return true;
                }
            }

            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    }

    public searchInArray(arr, searchText) {
        for (const value of arr) {
            if (typeof value === 'string') {
                if (this.searchInString(value, searchText)) {
                    return true;
                }
            }

            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    }

    public searchInString(value, searchText) {
        return value.toLowerCase().includes(searchText);
    }

}
