import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {

  constructor(@InjectRepository(Customer) private customerRepository: Repository<Customer>) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const response = await this.customerRepository.save(createCustomerDto);
    return response;
  }

  async findAll() {
    const response = await this.customerRepository.find();
    return response;
  }

  async findOne(id: string) {
    const response = await this.customerRepository.findOneBy({id: id});
    return response;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.findOne(id);
    if (!customer) {
      throw new NotFoundException();
    }
    Object.assign(customer, updateCustomerDto);
    const response = await this.customerRepository.save(customer);
    return response;
  }

  async remove(id: string) {
    const response = await this.customerRepository.softDelete(id);
    return response;
  }
}
