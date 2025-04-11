import { Routes } from "@angular/router";
import { AddBookComponent } from "./add-book/add-book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";


export const routes: Routes = [
    {
        path:"add-book",
        component: AddBookComponent
    },
    {
        path:"book-list",
        component: BookListComponent
    },
    {
        path:"home",
        component: HomeComponent
    },

    { path: 'search',
         component: SearchComponent
    }
]

