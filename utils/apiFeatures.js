class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const location = this.queryStr.location
      ? {
          address: {
            $regex: this.queryStr.location,
            $options: 'i',
          },
        }
      : {};

    const guests = this.queryStr.guests
      ? {
          guestCapacity: {
            $regex: this.queryStr.guests,
            $options: 'i',
          },
        }
      : {};

    const category = this.queryStr.category
      ? {
          category: {
            $regex: this.queryStr.category,
            $options: 'i',
          },
        }
      : {};

    this.query = this.query.find({
      ...location,
      ...guests,
      ...category,
    });

    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // Remove fields from query
    const removeFields = ['location', 'page'];
    removeFields.forEach((el) => delete queryCopy[el]);

    this.query = this.query.find(queryCopy);

    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

export default APIFeatures;
