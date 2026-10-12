export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  repo: string;
  live?: string;
  image?: string;
  imageAlt?: string;
  metrics?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Gold Trend Forecasting",
    eyebrow: "Machine Learning · Financial AI",
    description:
      "A hybrid machine-learning framework for forecasting 20-trading-day XAU/USD trend direction using 12 technical indicators, time-series-aware validation and a deployed prediction interface.",
    stack: ["Python", "scikit-learn", "Gradient Boosting", "Logistic Regression", "Streamlit"],
    repo: "https://github.com/OscarMuchiri/Gold-Trend-Forecasting-ML",
    live: "https://gold-trend-forecasting-ml-qb5rdxcjgm683bjdt9cjmu.streamlit.app/",
    image:
      "https://raw.githubusercontent.com/OscarMuchiri/Gold-Trend-Forecasting-ML/main/results/figure_04_final_test_metric_comparison.png",
    imageAlt: "Gold forecasting model metric comparison",
    metrics: ["66.81% accuracy", "76.41% F1", "61.71% ROC-AUC"],
    featured: true
  },
  {
    title: "Road Damage Detection",
    eyebrow: "Computer Vision · YOLOv8",
    description:
      "A YOLOv8 computer-vision system trained to detect potholes in road imagery, with validation analysis, saved model weights and a live image-inference application.",
    stack: ["Python", "YOLOv8", "Ultralytics", "OpenCV", "Streamlit"],
    repo: "https://github.com/OscarMuchiri/road-damage-detection-yolov8",
    live: "https://road-damage-detection-yolov8-5zpqzf4ayqnlnnhh5bvnf9.streamlit.app/",
    image:
      "https://raw.githubusercontent.com/OscarMuchiri/road-damage-detection-yolov8/main/results/pothole_detection_01.jpg",
    imageAlt: "Pothole detection inference result",
    metrics: ["0.822 mAP50", "0.535 mAP50–95", "30 epochs"],
    featured: true
  },
  {
    title: "Car Sales BI Dashboard",
    eyebrow: "Business Intelligence · Analytics",
    description:
      "An interactive Power BI dashboard for analysing vehicle sales, revenue, pricing, fuel efficiency, resale value and customer segments, supported by a reproducible Python data-preparation workflow.",
    stack: ["Power BI", "Python", "pandas", "NumPy", "Data Visualisation"],
    repo: "https://github.com/OscarMuchiri/Car-sales-Bi-Dashboard",
    image:
      "https://raw.githubusercontent.com/OscarMuchiri/Car-sales-Bi-Dashboard/main/dashboard_overview.png",
    imageAlt: "Car sales Power BI dashboard",
    metrics: ["2 report pages", "KPI reporting", "Interactive filters"]
  },
  {
    title: "Home Security System",
    eyebrow: "IoT · Edge AI",
    description:
      "A Raspberry Pi security prototype combining PIR motion sensing, TensorFlow Lite object detection, GPIO alarms, Telegram notifications and event logging.",
    stack: ["Raspberry Pi", "TensorFlow Lite", "OpenCV", "Python", "Telegram Bot"],
    repo: "https://github.com/OscarMuchiri/Home-Security-System",
    metrics: ["Edge inference", "PIR sensing", "Alert automation"]
  },
  {
    title: "Heart Disease Prediction",
    eyebrow: "Classical Machine Learning",
    description:
      "A baseline classification study comparing Logistic Regression, K-Nearest Neighbours and Random Forest on a heart-disease dataset, with documented evaluation and limitations.",
    stack: ["Python", "scikit-learn", "Random Forest", "Logistic Regression", "pandas"],
    repo: "https://github.com/OscarMuchiri/Heart-Disease-Prediction",
    metrics: ["82.07% best accuracy", "3 classifiers", "Educational study"]
  }
];
