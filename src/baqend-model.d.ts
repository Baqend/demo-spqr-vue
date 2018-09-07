/* tslint:disable */

import { binding } from 'baqend';

declare module 'baqend' {

  interface baqend {
    Answer: binding.EntityFactory<model.Answer>;
    Question: binding.EntityFactory<model.Question>;
  }

  namespace model {
    interface User extends binding.Entity {
    }

    interface Device extends binding.Entity {
      deviceOs: string;
    }

    interface Answer extends binding.Entity {
      author: string;
      text: string;
      upvotes: number;
      question: Question;
    }

    interface Question extends binding.Entity {
      author: string;
      text: string;
      upvotes: number;
      answers: number;
    }

    interface Role extends binding.Entity {
      name: string;
      users: Set<User>;
    }

  }
}
