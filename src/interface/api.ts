/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/event': {
    /** Get all events, and filtered. */
    get: operations['GET_EVENT'];
    /** Allows for the update of events. */
    put: operations['PUT_EVENT'];
    /** Allows the posting of events */
    post: operations['POST_EVENTS'];
    /** Deleting a specific event type */
    delete: operations['DELETE_EVENT'];
  };
  '/user': {
    /** Get all users / get all users in a particular club */
    get: operations['GET_USER'];
    /** Create user upon registration */
    post: operations['POST_USER'];
  };
  '/club': {
    /** Get all clubs, and club by name. */
    get: operations['GET_CLUB'];
    /** Modify the club things i.e. club name. */
    put: operations['PUT_CLUB'];
    post: operations['POST_CLUB'];
    /** Allows for the deletion of information the club path. */
    delete: operations['DELETE_CLUB'];
  };
  '/sponsor': {
    /** Get all sponsors, sponsor of a discount, and filtered. */
    get: operations['GET_SPONSOR'];
    /** Allows the modification of the sponsors. */
    put: operations['PUT_SPONSOR'];
    /** Allows the posting of sponsors */
    post: operations['POST_SPONSOR'];
    /** Deleting a sponsor from UADS. */
    delete: operations['DELETE_SPONSOR'];
  };
  '/discount': {
    /** Get all discounts, discounts of a sponsor, and filtered. */
    get: operations['GET_DISCOUNT'];
    /** Allows admins to modify discounts */
    put: operations['PUT_DISCOUNT'];
    /** Allows the posting of discounts. */
    post: {
      responses: {
        /** Successfully posted discount */
        200: unknown;
        /** Error has occurred */
        404: unknown;
      };
    };
    /** Deleting offers in UADS. */
    delete: operations['DELETE_DISCOUNT'];
  };
  '/user/{id}': {
    get: operations['GET_USER_ID'];
    /** Change user */
    put: operations['PUT_USER'];
    /** Allows to delete user from UADS. */
    delete: operations['DELETE_USER'];
    parameters: {
      path: {
        id: number;
      };
    };
  };
  '/club/{id}': {
    put: operations['GET_CLUB_ID'];
    parameters: {
      path: {
        id: number;
      };
    };
  };
}

export interface components {
  schemas: {
    /** Data type to store sponsors using the UADS App */
    Sponsor: {
      /** The UUID of the sponsor */
      uuid: string;
      /** The name of the sponsor */
      name: string;
      /** The description of the sponsor */
      desc: string;
    };
    /** Data type to store clubs using the UADS App */
    Club: {
      /** The UUID of the Club */
      uuid: string;
      /** The name of the club */
      name: string;
      /** A club description */
      desc?: string;
      /** A image of the club */
      imagePath?: string;
      /** The admin(s) of the club */
      admins?: string[];
      /** The UUID of the sponsor(s) of the club */
      sponsors?: string[];
      /** The events hosted by the club */
      events?: string[];
    };
    /** Data type to store events using the UADS App */
    Event: {
      /** The UUID of the event */
      uuid: string;
      /** The name of the event */
      name: string;
      /** The starting Date of the event */
      date: Date;
      /** The path/url to an event image */
      imagePath?: string;
      /** The maximum number of attendees, (-1 for no cap) */
      attendanceCap: number;
      /** The sponsor(s) of the event */
      sponsors?: string[];
      /** An external url for the event */
      url?: string;
      /** The UUID of club(s) hosting the event */
      club: string[];
    };
    /** A user of the app */
    User: {
      /** > uuid of the users */
      uuid: string;
      name?: { [key: string]: unknown };
    };
    /** Discounts */
    Discount: {
      /** The description of the discount */
      desc: string;
      /** The id of the discount */
      uuid: number;
      /** The sponsor of the discount */
      sponsor: string;
      /** The value of the discount */
      value: number;
    };
  };
}

export interface operations {
  /** Get all events, and filtered. */
  GET_EVENT: {
    parameters: {
      query: {
        /** Sort by filter */
        filter?: string;
      };
    };
    responses: {
      /** Valid request */
      200: {
        content: {
          'application/json': components['schemas']['Event'][];
        };
      };
    };
  };
  /** Allows for the update of events. */
  PUT_EVENT: {
    responses: {
      /** Successfully modify the events. */
      200: unknown;
      /** An error has occurred. */
      404: unknown;
    };
  };
  /** Allows the posting of events */
  POST_EVENTS: {
    responses: {
      /** Successfully posted events */
      200: unknown;
      /** Error has occurred */
      404: unknown;
    };
  };
  /** Deleting a specific event type */
  DELETE_EVENT: {
    responses: {
      /** Event successfully deleted */
      200: unknown;
      /** An error has occurred. */
      404: unknown;
    };
  };
  /** Get all users / get all users in a particular club */
  GET_USER: {
    parameters: {
      query: {
        /** the members of a given club */
        'clubMembership.name'?: string;
        /** the members of a university */
        university?: string;
        /** get members by graduation level */
        'gradLevel.type'?: string;
      };
    };
    responses: {
      /** success */
      200: {
        content: {
          'application/json': components['schemas']['User'][];
        };
      };
    };
  };
  /** Create user upon registration */
  POST_USER: {
    responses: {
      /** Success */
      201: unknown;
      /** fails */
      404: unknown;
    };
    /** User to be added */
    requestBody: {
      content: {
        'application/json': components['schemas']['User'];
      };
    };
  };
  /** Get all clubs, and club by name. */
  GET_CLUB: {
    parameters: {
      query: {
        name?: string;
      };
    };
    responses: {
      /** Success */
      200: {
        content: {
          'application/json': components['schemas']['Club'][];
        };
      };
    };
  };
  /** Modify the club things i.e. club name. */
  PUT_CLUB: {
    responses: {
      /** Successfully modified club */
      200: unknown;
      /** An error has occurred. */
      404: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['Club'];
      };
    };
  };
  POST_CLUB: {
    responses: {
      /** Successful post */
      200: unknown;
    };
  };
  /** Allows for the deletion of information the club path. */
  DELETE_CLUB: {
    responses: {
      /** Successfully deleted information. */
      200: unknown;
      /** An error occurred. */
      404: unknown;
    };
  };
  /** Get all sponsors, sponsor of a discount, and filtered. */
  GET_SPONSOR: {
    parameters: {
      query: {
        /** name filter/search? */
        filter?: string;
        /** Get by discount */
        discount?: string;
      };
    };
    responses: {
      /** Success */
      200: {
        content: {
          'application/json': components['schemas']['Sponsor'][];
        };
      };
    };
  };
  /** Allows the modification of the sponsors. */
  PUT_SPONSOR: {
    responses: {
      /** Successfully modify the sponsors. */
      200: unknown;
      /** An error has occurred. */
      404: unknown;
    };
  };
  /** Allows the posting of sponsors */
  POST_SPONSOR: {
    responses: {
      /** Successfully posts sponsor */
      200: unknown;
      /** Error has occurred */
      404: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['Sponsor'];
      };
    };
  };
  /** Deleting a sponsor from UADS. */
  DELETE_SPONSOR: {
    responses: {
      /** Successfully deleted sponsor */
      200: unknown;
      /** An error has occurred. */
      404: unknown;
    };
  };
  /** Get all discounts, discounts of a sponsor, and filtered. */
  GET_DISCOUNT: {
    parameters: {
      query: {
        /** Sort by filter */
        filter?: string;
        /** Get discounts from a particular sponsor */
        sponsor?: string;
      };
    };
    responses: {
      /** Offers successfully received */
      200: {
        content: {
          'application/json': components['schemas']['Discount'][];
        };
      };
    };
  };
  /** Allows admins to modify discounts */
  PUT_DISCOUNT: {
    responses: {
      /** Discount successfully put. */
      200: {
        content: {
          'application/json': components['schemas']['Discount'][];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['Discount'];
      };
    };
  };
  /** Deleting offers in UADS. */
  DELETE_DISCOUNT: {
    responses: {
      /** Successfully deleted offer */
      200: unknown;
    };
  };
  GET_USER_ID: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** Success */
      200: {
        content: {
          'application/json': components['schemas']['User'];
        };
      };
      /** None found */
      404: unknown;
    };
  };
  /** Change user */
  PUT_USER: {
    parameters: {
      path: {
        id: number;
      };
      query: {
        /** edit first name */
        firstName?: string;
        /** edit last name */
        lastName?: string;
        /** edit university */
        university?: { [key: string]: unknown };
        /** edit description */
        'gradLevel.type'?: { [key: string]: unknown };
        /** edit club */
        'clubMembership.name'?: { [key: string]: unknown };
        /** edit notifications on */
        notificationsON?: { [key: string]: unknown };
      };
    };
    responses: {
      /** Successful change in the user management. */
      200: unknown;
      /** An error has occurred. */
      404: unknown;
    };
  };
  /** Allows to delete user from UADS. */
  DELETE_USER: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** Successfully deleted user */
      200: unknown;
      /** An error has occurred. */
      404: unknown;
    };
  };
  GET_CLUB_ID: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** Good */
      200: unknown;
    };
  };
}

export interface external {}
