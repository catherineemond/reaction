import React from 'react';
import { Link } from 'react-router-dom';
import EditCardTitleContainer from './EditCardTitleContainer';
import EditCardDescriptionContainer from './EditCardDescriptionContainer';
import Comment from '../comment/Comment';
import CreateCommentContainer from '../comment/CreateCommentContainer';
import * as utilities from '../../lib/Utilities';

class Card extends React.Component {
  handleToggle = () => {
    const updatedCard = {
      card: {
        completed: !this.props.card.completed,
      },
    };
    this.props.onToggle(updatedCard);
  };

  render() {
    return (
      <div id="modal-container">
        <div className="screen"></div>
        <div id="modal">
          <Link to={`/boards/${this.props.card.board_id}`}>
            <i className="x-icon icon close-modal"></i>
          </Link>
          <header>
            <i className="card-icon icon .close-modal"></i>
            <EditCardTitleContainer card={this.props.card} />
            <p>
              in list{' '}
              <a className="link">Stuff to try (this is a list)</a>
              <i className="sub-icon sm-icon"></i>
            </p>
          </header>
          <section className="modal-main">
            <ul className="modal-outer-list">
              <li className="details-section">
                <ul className="modal-details-list">
                  <li className="labels-section">
                    <h3>Labels</h3>
                    <div className="member-container">
                      <div className="green label colorblindable"></div>
                    </div>
                    <div className="member-container">
                      <div className="yellow label colorblindable"></div>
                    </div>
                    <div className="member-container">
                      <div className="orange label colorblindable"></div>
                    </div>
                    <div className="member-container">
                      <div className="blue label colorblindable"></div>
                    </div>
                    <div className="member-container">
                      <div className="purple label colorblindable"></div>
                    </div>
                    <div className="member-container">
                      <div className="red label colorblindable"></div>
                    </div>
                    <div className="member-container">
                      <i className="plus-icon sm-icon"></i>
                    </div>
                  </li>
                  <li className="due-date-section">
                    <h3>Due Date</h3>
                    <div
                      id="dueDateDisplay"
                      className={utilities.dueClass(this.props.card)}
                    >
                      <input
                        onClick={this.handleToggle}
                        defaultChecked={this.props.card.completed}
                        id="dueDateCheckbox"
                        type="checkbox"
                        className="checkbox"
                      />
                      {this.props.card.due_date}{' '}
                      <span>(past due)</span>
                    </div>
                  </li>
                </ul>
                <form className="description">
                  <p>Description</p>
                  <EditCardDescriptionContainer
                    card={this.props.card}
                  />
                </form>
              </li>
              <li className="comment-section">
                <h2 className="comment-icon icon">Add Comment</h2>
                <div>
                  <div className="member-container">
                    <div className="card-member">TP</div>
                  </div>
                  <CreateCommentContainer
                    cardId={this.props.card.id}
                  />
                </div>
              </li>
              <li className="activity-section">
                <h2 className="activity-icon icon">Activity</h2>
                <ul className="horiz-list">
                  <li className="not-implemented">Show Details</li>
                </ul>
                <ul className="modal-activity-list">
                  {this.props.comments.map(comment => (
                    <Comment {...comment} />
                  ))}
                </ul>
              </li>
            </ul>
          </section>
          <aside className="modal-buttons">
            <h2>Add</h2>
            <ul>
              <li className="member-button">
                <i className="person-icon sm-icon"></i>Members
              </li>
              <li className="label-button">
                <i className="label-icon sm-icon"></i>Labels
              </li>
              <li className="checklist-button">
                <i className="checklist-icon sm-icon"></i>Checklist
              </li>
              <li className="date-button not-implemented">
                <i className="clock-icon sm-icon"></i>Due Date
              </li>
              <li className="attachment-button not-implemented">
                <i className="attachment-icon sm-icon"></i>Attachment
              </li>
            </ul>
            <h2>Actions</h2>
            <ul>
              <li className="move-button">
                <i className="forward-icon sm-icon"></i>Move
              </li>
              <li className="copy-button">
                <i className="card-icon sm-icon"></i>Copy
              </li>
              <li className="subscribe-button">
                <i className="sub-icon sm-icon"></i>Subscribe
                <i className="check-icon sm-icon"></i>
              </li>
              <hr />
              <li className="archive-button">
                <i className="file-icon sm-icon "></i>Archive
              </li>
            </ul>
            <ul className="light-list">
              <li className="not-implemented">Share and more...</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default Card;
