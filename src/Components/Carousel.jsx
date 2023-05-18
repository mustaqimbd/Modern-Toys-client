import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

const Carousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-between">
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    onClick={handlePrev}
                >
                    <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    onClick={handleNext}
                >
                    <ChevronRightIcon className="h-5 w-5" />
                </button>
            </div>
            <Transition
                show={true}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <img
                    src={items[activeIndex].imageUrl}
                    alt={items[activeIndex].altText}
                    className="mx-auto rounded-lg shadow-md"
                />
            </Transition>
            <div className="flex justify-center mt-4">
                {items.map((item, index) => (
                    <button
                        key={index}
                        className={classNames('h-2.5 w-2.5 rounded-full mx-1', {
                            'bg-gray-900': index === activeIndex,
                            'bg-gray-300': index !== activeIndex,
                        })}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
