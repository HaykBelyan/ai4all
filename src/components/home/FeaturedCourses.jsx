import React from 'react';
import { useTranslation } from 'react-i18next';
import CourseCard from '../courses/CourseCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const FeaturedCourses = ({ courses }) => {
    const { t } = useTranslation();
    const [gridRef, gridIsVisible] = useIntersectionObserver({ threshold: 0.05 });

    return (
        <section className="featured-courses-section">
            <div className="container">
                <h2 className="section-title">{t('home.featuredCourses.title')}</h2>
                {/* FIX: Switched from CSS Grid to Flexbox for proper centering */}
                <div
                    ref={gridRef}
                    className={`courses-grid stagger-children ${gridIsVisible ? 'visible' : ''}`}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center', // This centers the items on each line
                        gap: '30px',
                    }}
                >
                    {courses.map(course => (
                        // We give each card a flex basis to control its size
                        <div key={course.id} style={{ flex: '1 1 320px', maxWidth: '380px' }}>
                           <CourseCard course={course} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;