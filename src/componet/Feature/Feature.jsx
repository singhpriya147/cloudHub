import styles from './Feature.module.css';

const Feature = () => {
  return (
    <div className={styles.container}>
      {/* Share Section */}
      <div className={styles.shareSection}>
        <h2 className={styles.sectionTitle}>
          Share anything you’re working on.
        </h2>
        <p className={styles.description}>
          Campsite has been instrumental in keeping designers aware of each
          other’s work-in-progress in a way that was previously slowing us down.
          It’s also one of the only channels where.
        </p>
        <div className={styles.features}>
          <span className={styles.feature}>✔ Coded</span>
          <span className={styles.feature}>✔ 100% Secure</span>
        </div>
        <a href='#' className={styles.link}>
          See how it works
        </a>
        <div className={styles.codeBlock}>
          <pre>
            <code>
              {`no ApiCheck('hello-api-1', {
  name: 'Hello API',
  activated: true,
  request: {
    method: 'GET',
    url: 'https://api.checklyhq.com/public-url',
  assertions: [
    assertionBuilder.statusCode().equals(200)
  ]
});`}
            </code>
          </pre>
        </div>
      </div>

      {/* Feedback Section */}
      <div className={styles.feedbackSection}>
        <h2 className={styles.sectionTitle}>
          Better feedback at the right time.
        </h2>
        <p className={styles.description}>
          Campsite has been instrumental in keeping designers aware of each
          other’s work-in-progress in a way that was previously slowing us down.
          It’s also one of the only channels where.
        </p>
        <a href='#' className={styles.link}>
          See how it works
        </a>
        <div className={styles.feedbackList}>
          <div className={styles.feedbackItem}>
            <span>Buzz Ubermorn</span>
            <span className={styles.pending}>Pending</span>
          </div>
          <div className={styles.feedbackItem}>
            <span>Gabriel Valdivia</span>
            <span className={styles.done}>Done</span>
          </div>
          <div className={styles.feedbackItem}>
            <span>Jochen Dietz</span>
            <span className={styles.requested}>Requested</span>
          </div>
          <button className={styles.addMore}>Add More</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
