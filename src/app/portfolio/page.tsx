"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch ,FaFolder, FaFolderOpen, FaGithub, FaExternalLinkAlt, FaCode, FaBrain, FaRobot, FaSpinner, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MatrixRain, TypewriterText } from '@/components/UIComponents';


interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const ProjectItem: React.FC<{ project: GitHubRepo; onSelect: (project: GitHubRepo) => void }> = ({ project, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.05 }}
      className="mb-4 cursor-pointer bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300"
      onClick={() => onSelect(project)}
    >
      <div className="flex items-center text-green-400 mb-2">
        <FaFolder className="mr-2" />
        <h3 className="text-lg font-semibold">{project.name}</h3>
      </div>
      <p className="text-gray-300 text-sm h-12 overflow-hidden">{project.description || 'No description available'}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.topics.slice(0, 3).map((topic, index) => (
          <span key={index} className="text-xs bg-gray-700 text-green-300 px-2 py-1 rounded-full">
            {topic}
          </span>
        ))}
        {project.topics.length > 3 && (
          <span className="text-xs bg-gray-700 text-green-300 px-2 py-1 rounded-full">
            +{project.topics.length - 3}
          </span>
        )}
      </div>
    </motion.div>
  );
};

const ProjectDetails: React.FC<{ project: GitHubRepo; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gray-800 p-6 rounded-lg border border-green-500"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl text-green-400 flex items-center">
          <FaFolderOpen className="mr-2" />
          {project.name}
        </h2>
        <button
          onClick={onClose}
          className="text-green-400 hover:text-green-300"
        >
          [Close]
        </button>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-300 mb-4">{project.description || 'No description available'}</p>
        <div className="mb-4">
          <p className="text-green-400 mb-2">Topics:</p>
          <div className="flex flex-wrap gap-2">
            {project.topics.map((topic, index) => (
              <span key={index} className="text-sm bg-gray-700 text-green-300 px-2 py-1 rounded-full">
                {topic}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-gray-300">
            <FaCode className="inline mr-1" /> {project.language || 'N/A'}
          </span>
          <span className="text-gray-300">
            <FaGithub className="inline mr-1" /> Stars: {project.stargazers_count}
          </span>
          <span className="text-gray-300">
            <FaGithub className="inline mr-1" /> Forks: {project.forks_count}
          </span>
        </div>
        <div className="flex space-x-4">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-600 text-black px-4 py-2 rounded-full hover:bg-green-500 transition duration-300"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 text-black px-4 py-2 rounded-full hover:bg-blue-500 transition duration-300"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Pagination: React.FC<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void }> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pageNumbers.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pageNumbers.push('...');
    }
  }

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <AnimatePresence mode="wait">
        <motion.button
          key="prev"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-gray-800 text-green-400 rounded-md disabled:opacity-50 hover:bg-gray-700 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft />
        </motion.button>
        {pageNumbers.map((number, index) => (
          <motion.button
            key={index}
            onClick={() => typeof number === 'number' && onPageChange(number)}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              number === currentPage
                ? 'bg-green-600 text-black'
                : 'bg-gray-800 text-green-400 hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {number}
          </motion.button>
        ))}
        <motion.button
          key="next"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-gray-800 text-green-400 rounded-md disabled:opacity-50 hover:bg-gray-700 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight />
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<GitHubRepo[]>([]);
  const [selectedProject, setSelectedProject] = useState<GitHubRepo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const projectsPerPage = 3;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/youneskazemi/repos?sort=updated&direction=desc');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data: GitHubRepo[] = await response.json();
        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const results = projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProjects(results);
    setCurrentPage(1);
    setSelectedProject(null);
  }, [searchTerm, projects]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSelectedProject(null);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <MatrixRain />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl mb-12 flex items-center justify-center"
        >
          <FaRobot className="mr-4 text-5xl" />
          <TypewriterText text="AI Universe: GitHub Showcase" speed={50} cursor={false} />
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-2 bg-gray-800 text-green-400 rounded-full border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-green-400" />
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl mb-4 flex items-center">
                <FaCode className="mr-2" />
                <TypewriterText text="GitHub Projects" speed={50} cursor={false}/>
              </h2>
              <AnimatePresence mode="wait">
                {currentProjects.length > 0 ? (
                  currentProjects.map((project) => (
                    <ProjectItem
                      key={project.id}
                      project={project}
                      onSelect={setSelectedProject}
                    />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-gray-400 mt-8"
                  >
                    No projects found matching your search.
                  </motion.div>
                )}
              </AnimatePresence>
              {filteredProjects.length > projectsPerPage && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
            <div>
              <h2 className="text-2xl mb-4 flex items-center">
                <FaBrain className="mr-2" />
                <TypewriterText text="Project Details" speed={50} cursor={false}/>
              </h2>
              <AnimatePresence mode="wait">
                {selectedProject ? (
                  <ProjectDetails
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-gray-800 p-6 rounded-lg border border-green-500 text-center"
                  >
                    <p>Select a project to view details</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;