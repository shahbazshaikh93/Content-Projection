import { Injectable } from '@angular/core';

@Injectable()
export class ContentProjectionService {

    constructor(
    ) {
    }

    getStudentListSlowly(): Promise<any[]> {
        const studentList: any[] = [
            {
                name: 'Jack',
                stream: 'Science'
            },
            {
                name: 'Thomas',
                stream: 'Commerce'
            },
            {
                name: 'Harry',
                stream: 'Humanities'
            },
            {
                name: 'Noah',
                stream: 'Arts'
            },
        ];

        return new Promise(resolve => {
            // Delay by 6 second
            setTimeout(() => resolve(studentList), 5000);
        });
    }

}
