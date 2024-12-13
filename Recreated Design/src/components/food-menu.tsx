import { menuItems, categories } from '@/constants/menu-data';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState('All Category');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Menu</h1>

        {/* Mobile Category Selector */}
        <div className="md:hidden">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Categories */}
        <div className="hidden md:flex justify-end space-x-8 border-b">
          {categories.map((category) => (
            <button
              key={category}
              className={`pb-4 px-2 ${
                selectedCategory === category
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-lg group cursor-pointer ${
              index === 0 || index === 1 ? 'md:col-span-1 lg:col-span-1' : ''
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0 flex flex-col justify-end p-4">
              <div className="border border-white backdrop-filter backdrop-blur-[10px] bg-white/70 bg-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[#1E293B] font-medium">{item.name}</h3>
                  <span className="text-[#1E293B]">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-[#64748B] text-sm">{item.served} Served</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;
