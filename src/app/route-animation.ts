import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';


export const slideInAnimation =
    trigger('routeAnimations', [
        transition('Expense => Group, Group => Home', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%', })),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Home => * , Group => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),


    ]);