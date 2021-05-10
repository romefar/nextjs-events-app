export default class BaseService {
  constructor (repository) {
    this.repository = repository;
  }

  async getAll (data = {}) {
    return await this.repository.find(data);
  }

  async getOneById (id) {
    return await this.repository.findOne({ _id: id });
  }

  async create (data, options) {
    return await this.repository.create(data, options);
  }

  async delete (id) {
    return await this.repository.deleteOne({ _id: id });
  }

  async updateById (id, data, options) {
    return await this.repository.findByIdAndUpdate(id, data, options);
  }
}
