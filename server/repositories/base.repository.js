export default class BaseRepository {
  constructor (model) {
    this.model = model;
  }

  async findByIdAndUpdate (
    id,
    update,
    options
  ) {
    return await this.model.findByIdAndUpdate(id, update, options);
  }

  async findById (id) {
    return await this.model.findById(id);
  }

  async findOne (
    filter,
    projection,
    options
  ) {
    return await this.model.findOne(filter, projection, options);
  }

  async find (
    filter,
    projection,
    options
  ) {
    return await this.model.find(filter, projection, options);
  }

  async create (data) {
    return await this.model.create(data);
  }

  async updateOne (
    query,
    update,
    options
  ) {
    return await this.model.updateOne(query, update, options);
  }

  async deleteOne (filter) {
    return await this.model.deleteOne(filter);
  }
}
